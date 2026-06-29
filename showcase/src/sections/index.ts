import { renderBootstrap, renderDialogsSection, renderFormsSection, renderIconsSection, renderNavigationSection, renderOverlaysSection } from './bootstrap';
import {
  renderColors,
  renderMotion,
  renderRadius,
  renderShadows,
  renderSpacing,
  renderTypography,
} from './foundations';
import { renderOverview, renderTokens } from './overview';
import { renderPlantasonic } from './plantasonic';
import {
  renderAccessibility,
  renderChangelog,
  renderLayouts,
  renderThemes,
  renderUtilities,
} from './reference';

export type SectionRenderer = () => string;

export const SECTIONS: Record<string, SectionRenderer> = {
  overview: renderOverview,
  tokens: renderTokens,
  colors: renderColors,
  typography: renderTypography,
  spacing: renderSpacing,
  radius: renderRadius,
  shadows: renderShadows,
  motion: renderMotion,
  bootstrap: renderBootstrap,
  forms: renderFormsSection,
  navigation: renderNavigationSection,
  dialogs: renderDialogsSection,
  overlays: renderOverlaysSection,
  icons: renderIconsSection,
  plantasonic: renderPlantasonic,
  layouts: renderLayouts,
  utilities: renderUtilities,
  accessibility: renderAccessibility,
  themes: renderThemes,
  changelog: renderChangelog,
};

export function renderSection(id: string): string {
  const fn = SECTIONS[id] ?? SECTIONS.overview;
  return fn();
}
