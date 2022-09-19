export function RawDisplayer({ data }: { data: any }) {
  return (
    <div className="raw-displayer w-full bg-gray-200 rounded-xl relative px-5 py-3 text-left overflow-x-scroll">
      <code>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </code>
    </div>
  )
}
