import type { ApplicationShellConfig } from './types';
import { mergeShellConfig } from './config';
import { mergeRoutesIntoNavigation } from './routes';
import {
  applyPanelStates,
  renderAppFrame,
  renderCommandPalette,
  renderDocks,
  renderNavigationFrame,
  renderPanelStack,
  renderWorkspace,
  resolveLayoutFromState,
} from './render';
import { renderNotificationHost } from './notification-system';
import { renderOverlayLayer } from './overlay-manager';
import { loadWindowState } from './window-state';
import { initShellTheme } from './theme-provider';

export { mergeShellConfig } from './config';

export function renderApplicationShell(config: Partial<ApplicationShellConfig> = {}, workspaceContent?: string): string {
  const merged = mergeShellConfig(config);
  const shellId = merged.id ?? 'default';
  const state = merged.persistState ? loadWindowState(shellId) : null;

  const { navigation: navWithRoutes } = mergeRoutesIntoNavigation(merged.navigation, merged.routes);
  const workspaceMode = merged.workspace ?? state?.workspaceMode ?? 'single';
  const layoutMods = resolveLayoutFromState(state);
  if (merged.regions?.inspector === false) layoutMods.push('inspector-hidden');

  const nav = {
    ...navWithRoutes,
    layout: (layoutMods[0] ?? navWithRoutes.layout ?? 'default') as typeof navWithRoutes.layout,
  };

  if (state?.theme || merged.theme) {
    initShellTheme(state?.theme ?? merged.theme ?? 'dark');
  }

  const panels = applyPanelStates(merged.panels ?? [], state?.panelStates ?? {});
  let workspace = renderWorkspace(workspaceMode, workspaceContent);
  if (panels.length && !workspaceContent) {
    workspace = renderWorkspace(workspaceMode, renderPanelStack(panels));
  }

  const commands = merged.commands ?? nav.commands ?? [];
  const shellHtml =
    renderNavigationFrame(nav, workspace, {
      inspectorWidth: state?.inspectorWidth,
      shellId,
    }) + renderCommandPalette(commands);

  const docks = (merged.docks ?? []).filter((d) => d.position !== 'bottom');
  const docksHtml = merged.regions?.dock !== false ? renderDocks(docks) : '';

  return renderAppFrame({
    shellHtml,
    docksHtml,
    overlayHtml: merged.regions?.overlay !== false ? renderOverlayLayer() : '',
    notificationHtml: renderNotificationHost(),
    shellId,
  });
}

export type {
  ApplicationShellConfig,
  ShellCommand,
  ShellRoute,
  ShellWindowState,
  NavigationConfig,
  NavItemConfig,
  NavGroupConfig,
  PanelConfig,
  DockConfig,
  OverlayRequest,
  NotificationConfig,
  ThemeMode,
  WorkspaceMode,
} from './types';

export { EXAMPLE_SHELL, DEFAULT_REGIONS } from './types';
export { mergeRoutesIntoNavigation, collectRouteSearchItems } from './routes';
export { CommandRegistry, globalCommandRegistry } from './command-registry';
export { OverlayManager, globalOverlayManager } from './overlay-manager';
export { NotificationSystem, globalNotificationSystem } from './notification-system';
export { initShellTheme, setShellTheme, cycleShellTheme, getShellTheme, watchSystemTheme } from './theme-provider';
export {
  loadWindowState,
  saveWindowState,
  updatePanelState,
  applyWorkspaceMode,
  DEFAULT_WINDOW_STATE,
} from './window-state';
export { renderPanelStack } from './render';
export { bindApplicationShell, registerShellCommands } from './bind-shell';
