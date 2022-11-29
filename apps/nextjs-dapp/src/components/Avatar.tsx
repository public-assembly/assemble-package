import { useAuth } from '../hooks/useAuth'

/**
 * Type sizes, or should this be in a global theme object?
 * @returns Avatar Component
 */

export function Avatar() {
  const { ensName, ensAvatar } = useAuth()

  if (!ensAvatar) return null

  return (
    <div className="relative h-8 w-8 overflow-hidden rounded-full">
      {ensAvatar ? (
        <img className="absolute inset-0 object-fill" src={ensAvatar} alt={ensName} />
      ) : (
        <div />
      )}
    </div>
  )
}
