//@flow
import React, { PropTypes as pt } from 'react'
import { browserHistory } from 'react-router'
import { Container, Header, Company } from './CompaniesStyle'
import { Button } from 'react-bootstrap'

const Companies = React.createClass({
  propTypes: {
    getCompanies: pt.func.isRequired,
    companies: pt.arrayOf(pt.object).isRequired
  },

  componentDidMount() {
    this.props.getCompanies()
  },

  handleClickAddCompany() {
    browserHistory.push('/companies/new')
  },

  render() {
    const { companies } = this.props

    return <Container>
      <Header>Companies</Header>
      {companies.map(c =>
        <Company key={c.id}>{c.name}</Company>
      )}
      <Button
        bsStyle="primary"
        onClick={() => this.handleClickAddCompany()}
      >
        Add Company
      </Button>
    </Container>
  }
})

export default Companies
