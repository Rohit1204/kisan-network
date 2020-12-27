import './App.css';
import PrimarySearchbar from "../src/components/header/index"
import Showcontacts from "../src/components/show-contacts/HorizontalForm"
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <PrimarySearchbar/>
      <Switch>
        <Route exact path='/' component={Showcontacts}/>
        {/* <Route  path='/User-Contact/:id' component={UserContact}/>
        <Route  path='/otp-sent/:id' component={OtpSend}/> */}
        {/* <Route component={NoMatch}/> */}
      </Switch>
    </div>
  );
}

export default App;
