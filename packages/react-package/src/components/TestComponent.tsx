export function TestComponent({ text }: { text: string }) {
  return (
    <div className="rounded-xl border border-solid border-gray-200 p-4">
      This is a simple react component imported as an external package.{text}
    </div>
  )
}
