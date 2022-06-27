import React from 'react';
import Form from '../components/Form/form';
import List from '../components/List/list';
import workflow from './workflow.module.scss'


function Workflow() {
  return (
    <div className={workflow.WorkflowStyle}>
      <Form/>
      <List/>
    </div>
  );
}

export default Workflow;
