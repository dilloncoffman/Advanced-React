import React from 'react'
import NextDocument from 'next/document'
import { ServerStyleSheet } from 'styled-components'
export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })
      const initialProps = await NextDocument.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      // Don't have to call seal() manually unless in error scenario: https://github.com/zeit/next.js/pull/6207#issuecomment-460676919
      // sheet.seal()
    }
  }
}