//@flow
import React, { PropTypes, Component } from 'react'
import { Container, Header } from './CompaniesStyle'
import { FormControl, Button } from 'react-bootstrap'
import { saveCompany } from './../../../api'
import { browserHistory } from 'react-router'

class NewCompany extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: ''
    };
  } 

  handleChangeCompanyName(e) {
    this.setState({
      companyName: e.target.value
    });
  }

  handleAddCompany() {
    saveCompany(this.state.companyName);

    this.setState({
      companyName: ''
    });

    browserHistory.push('/companies')
  }

  render() {
    return <Container>
      <Header>New Company</Header>
      <FormControl
        type="text"
        value={this.state.companyName}
        placeholder="Company Name"
        onChange={(e) => this.handleChangeCompanyName(e)}
      />

      <Button
        bsStyle="primary"
        onClick={(e) => this.handleAddCompany()}
      >
        Add Company
      </Button>
    </Container>
  }
  
}

export default NewCompany
