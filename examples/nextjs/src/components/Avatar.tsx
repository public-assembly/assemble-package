import { useAuth } from "./../hooks/useAuth"

/**
 * Type sizes, or should this be in a global theme object?
 * @returns Avatar Component
 */

export function Avatar() {
  const { ensName, ensAvatar } = useAuth()
  return (
    <div className="relative overflow-hidden w-8 h-8 rounded-full">
      {ensAvatar
        ? <img
            className="absolute inset-0 object-fill"
            src={ensAvatar}
            alt={ensName}
          />
        : <div />
      }
    </div>
  )
}