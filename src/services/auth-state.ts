/** Minimal user profile exposed to UI components. */
export interface AuthUser {
  id: string;
  name: string;
  email: string;
  image?: string | null;
  role: 'free' | 'pro';
}

/** Simplified auth session state for UI consumption. */
export interface AuthSession {
  user: AuthUser | null;
  isPending: boolean;
}

// Self-hosted: no authentication — always unauthenticated (pro access handled separately)
const _currentSession: AuthSession = { user: null, isPending: false };

/**
 * Initialize auth state. No-op for self-hosted single-user deployment.
 */
export async function initAuthState(): Promise<void> {
  // Self-hosted: Clerk auth is disabled — no sign-in required
}

/**
 * Subscribe to reactive auth state changes.
 * @returns Unsubscribe function.
 */
export function subscribeAuthState(callback: (state: AuthSession) => void): () => void {
  // Emit current state immediately; no dynamic changes in self-hosted mode
  callback(_currentSession);
  return () => {};
}

/**
 * Synchronous snapshot of current auth state.
 */
export function getAuthState(): AuthSession {
  return _currentSession;
}
