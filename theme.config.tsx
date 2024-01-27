import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {

  /* Announcement */
  banner: {
    key: '1.0',
    text: (
      <a href="#">
        ✨ New documentation design.
      </a>
    )
  },

  /* Display the name */
  useNextSeoProps() {
    return {
      titleTemplate: '%s - Geo-VM'
    }
  },

  /* Embed part */
  head: (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta property="og:title" content="Geo-VM Docs" />
    </>
  ),

  /* Logo */
  logo: (
    <> <img src="https://www.geo-vm.net/_next/image?url=%2Fassets%2Fimg%2FGeoVM.png&w=64&q=75" alt="Geo-VM" style={{ width: '50px', height: 'auto' }} /> </>
  ),

  /* GitHub button */
  project: {
    link: 'https://github.com/Geo-VM/Docs',
  },

  /* Discord button */
  chat: {
    link: 'https://geo-vm.net/discord',
  },

  /* GitHub stuff */
  docsRepositoryBase: 'https://github.com/Geo-VM/Docs',
  footer: {
    text: 'Geo-VM Documentation.',
  },
}

export default config