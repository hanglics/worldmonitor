/**
 * Auth header widget — disabled for self-hosted single-user deployment.
 * Renders an empty container; no sign-in button or user avatar is shown.
 */
export class AuthHeaderWidget {
  private container: HTMLElement;

  constructor(_onSignInClick?: () => void, _onSettingsClick?: () => void) {
    this.container = document.createElement('div');
    this.container.className = 'auth-header-widget';
    // Self-hosted: no auth UI rendered
  }

  public getElement(): HTMLElement {
    return this.container;
  }

  public destroy(): void {
    // Nothing to clean up
  }
}
