export function TestComponent({ text }: { text?: string }) {
  return (
    <div className="border border-solid border-gray-200 p-4 rounded-xl">
      This is a simple react component imported as an external package.{text}
    </div>
  )
}
