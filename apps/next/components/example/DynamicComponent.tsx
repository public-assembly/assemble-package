import dynamic from 'next/dynamic'

const DynamicWebThreeComponent = dynamic(
  () => import('sample-package').then((module) => module.WebThreeComponent),
  {
    ssr: false,
  },
)

export default function DynamicComponent({
  address,
}: {
  address?: `0x${string}`
}) {
  return <>{address && <DynamicWebThreeComponent address={address} />}</>
}
