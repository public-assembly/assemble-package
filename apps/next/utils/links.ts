export const entries = {
  'Public Assembly': `https://public---assembly.com/`,
  twitter: `https://twitter.com/${process.env.NEXT_PUBLIC_TWITTER_HANDLE}`,
  forum: `https://forum.public---assembly.com/`,
  github: `https://github.com/public-assembly/assemble-package`,
  docs: `https://docs.public---assembly.com/`,
  governance: `https://nouns.build/dao/0xd2e7684cf3e2511cc3b4538bb2885dc206583076`,
}

export const links = Object.keys(entries).map((key) => {
  return {
    platform: key,
    url: entries[key as keyof typeof entries],
  }
})
