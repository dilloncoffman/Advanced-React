import App, { Container } from 'next/app'
import Page from '../components/Page'
import NProgress from "next-nprogress/component";


class MyApp extends App {
  render() {
    const { Component } = this.props

    return (
      <Container>
        <NProgress color="red" />
        <Page><Component /></Page>
      </Container>
    )
  }
}

export default MyApp