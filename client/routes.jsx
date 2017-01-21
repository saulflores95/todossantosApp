import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import ResolutionsWrapper from './resolutions/ResolutionsWrapper.jsx';
import About from './About.jsx'
import ResolutionDetail from './resolutions/ResolutionDetail.jsx';
import HomepageWrapper from './homepage/HomepageWrapper.jsx';
import MemberWrapper from './members/MemberWrapper.jsx'
import Rules from './members/Rules.jsx';

FlowRouter.route('/', {
  action() {
    mount(MainLayout,{
      content: (<HomepageWrapper />),
    })
  }
});

FlowRouter.route('/members', {
  action() {
    mount(MainLayout,{
      content: (<MemberWrapper />),
    })
  }
});

FlowRouter.route('/about', {
  action() {
    mount(MainLayout,{
      content: (<About />),
    })
  }
});

FlowRouter.route('/rules', {
  action() {
    mount(MainLayout,{
      content: (<Rules />),
    })
  }
});


FlowRouter.route('/resolutions/:id', {
  action(params) {
    mount(MainLayout,{
      content: (<ResolutionDetail id={params.id} />),
    })
  }
});
