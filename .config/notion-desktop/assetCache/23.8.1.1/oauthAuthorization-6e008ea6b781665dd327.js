(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"nra+":function(e,t,i){"use strict";i.r(t);var o=i("pVnL"),a=i.n(o),n=i("gcR/"),r=i.n(n),s=i("lSNA"),d=i.n(s),l=(i("3bBZ"),i("UxlC"),i("q1tI")),c=i.n(l),h=i("mF3+"),g=i("wldR"),p=i("Sb6f"),m=i("Ng05"),u=i("IULH"),S=i("hnPE"),v=i("+QMF"),y=i("2Y+N"),f=i("NSFP"),b=i("QcDD"),w=i("+fkW"),k=i("SiBm"),P=i("J9+s"),M=i("Rtjx"),A=i("JSZu"),x=i("qX+M"),C=i("BJyN"),I=i("ij+4"),T=i("w5Oa");class z extends I.b{renderAccountHeader(e){const t=k.a.getUserEmailAddress(this.environment,e);return t&&r()(f.a,{emailAddress:t,userId:e,disabled:!1,accountActions:[Object(C.i)(e)]})}renderFooter(){return r()("div",{style:this.getFooterStyle()},void 0,r()(y.a,{},void 0,v.b(this.environment)&&c.a.createElement(A.a,a()({createType:"add-account",disableLoginLink:this.props.disableLoginLink},this.stores))))}getMenuListSections(e){const{device:t}=this.environment;return[{key:"spaces",render:e=>c.a.createElement(y.a,a()({},e,{disableMobilePadding:!0,topBorder:t.isMobile,style:{borderBottom:"1px solid ".concat(this.theme.regularDividerColor)}})),items:this.getSpaceMenuListItems(e)}]}getSpaceMenuListItems(e){const{onSpaceClick:t}=this.props,i=[],{currentUserRootStore:o,currentSpaceStore:n}=b.default.state,s=k.a.getSpaceViewStores(this.environment,e);if(!o||!n)return[];s.sort((e,t)=>{var i,o;const a=Number(Boolean(null===(i=e.getSpaceStore())||void 0===i?void 0:i.canAdmin()));return Number(Boolean(null===(o=t.getSpaceStore())||void 0===o?void 0:o.canAdmin()))-a});for(const d of s){const s=d.getSpaceStore();if(s){const l=e===o.id&&s.id===n.id,h=Object(x.getSpaceName)(this.environment,s),g=s.canAdmin();let p;const m=w.a.getPublicSpaceData(this.environment,s.id);if(m){const e=m.productId?this.props.intl.formatMessage(Object(M.d)(m.productId)):this.props.intl.formatMessage("team"===s.getPlanType()?M.i.teamTrialPlan:M.i.personalPlan);p=this.props.intl.formatMessage("personal"===s.getPlanType()?M.i.workspaceSubtitleWithoutMembers:M.i.workspaceSubtitleWithMembers,{numberOfWorkspaceMembers:this.props.intl.formatNumber(m.memberCount),planType:e})}i.push({key:d.id,render:e=>c.a.createElement(T.a,a()({},e,{id:d.id,icon:Object(x.getSpaceIcon)(this.environment,s),title:h,caption:p,isCheck:l,showDragHandle:!1,disabled:!g,disableTooltip:g,tooltipMessage:r()(P.FormattedMessage,{id:"oauthAuthorizationPage.workspaceSwitcher.disabledWorkspace.tooltip",defaultMessage:"This integration can only be added by someone with Admin access."})})),action:async({event:e})=>{this.close(),l||await t({event:e,spaceViewStore:d})}})}}return i}getUnreadCountForOtherSpaces(){return 0}}var B=Object(P.injectIntl)(z),N=i("sdlW"),F=i("hU3F"),E=i("wpmu"),L=i("HTHG"),O=i("wlCD"),W=i("bPtJ"),R=i("CQbt"),U=i("nylu"),j=i("CSYU"),_=i("FUUC"),D=i("Pl3d"),V=i("G+Ai"),H=i("g90h"),q=i("PHZn"),Y=i("zmp8"),G=i("WgIs"),J=i("Oy36"),Q=i("Na01"),Z=i("OxuQ"),X=i("3DNc"),K=i("n8tN"),$=i("SR/M");class ee extends K.a{renderComponent(){const{isMobile:e,nestingLevel:t}=this.props;return c.a.createElement($.a,a()({},this.props,{title:r()(Q.a,{childrenStyle:ee.sidebarChildrenStyle,left:this.renderLeftCheckbox(),icon:this.renderIcon(),isMobile:e,style:{marginLeft:8*t}},void 0,this.renderTitle())}))}renderLeftCheckbox(){return r()(X.a,{size:16,checked:this.props.isChecked,onClick:this.props.onClick})}renderIcon(){const{store:e,isMobile:t}=this.props,i=e.getIcon();return r()(J.a,{disabled:!0,icon:i,title:void 0,isEmptyPage:e.isEmptyPage(),size:t?24:20,pageIconStyle:{fill:this.theme.mediumIconColor}})}renderTitle(){return r()(Z.a,{store:this.props.store})}}d()(ee,"sidebarChildrenStyle",{display:"flex",alignItems:"center"});var te=ee,ie=i("LvDl"),oe=i.n(ie),ae=i("HRSx"),ne=i("zzAG"),re=i("pgQH"),se=i("e28A"),de=i("mXKa"),le=i("qqdV"),ce=i("H4VD"),he=i("3O7B"),ge=i("IYZQ");class pe extends g.a{constructor(...e){super(...e),d()(this,"storeTypes",{selectedPageIdsStore:F.a.of(new Set),botsRequestStore:j.a,authorizationStepStore:F.a.of("permissions")}),d()(this,"sidebarState",this.createComputedStore(()=>Object(L.i)(this.environment))),d()(this,"renderRequestResult",(e,t,i)=>{const{responseType:o,integrationId:a,intl:n}=this.props,{currentUserRootStore:s,currentSpaceStore:d,currentSpaceViewStore:l,currentUserSettingsStore:c}=b.default.state;if(!(s&&d&&l&&c))return;const h=Object(x.getSpaceName)(this.environment,d);if(!a||!Object(H.f)(a))return this.renderError({type:re.a.invalid_request,body:r()(P.FormattedMessage,{id:"oauthAuthorizationPage.error.invalidClientId.body",defaultMessage:"Missing or incomplete Client ID. See <inlinetextlink>developer docs</inlinetextlink> for more help.",values:{inlinetextlink:(...e)=>r()(ge.a,{href:"https://developers.notion.com/#handling-errors"},void 0,e)}}),integration:void 0});const g=Object(W.c)(s,{table:R.a,id:a});if(!i||!g.isReady())return r()(O.a,{});if(!g.state.value)return this.renderError({type:re.a.invalid_request,body:r()(P.FormattedMessage,{id:"oauthAuthorizationPage.error.clientNotFound.body",defaultMessage:"Missing or incomplete Client ID. See <inlinetextlink>developer docs</inlinetextlink> for more help.",values:{inlinetextlink:(...e)=>r()(ge.a,{href:"https://developers.notion.com/#handling-errors"},void 0,e)}}),integration:g.state.value});if("code"!==o)return this.renderError({type:re.a.invalid_request,body:r()(P.FormattedMessage,{id:"oauthAuthorizationPage.error.invalidResponseType",defaultMessage:"Missing or invalid response_type. See <inlinetextlink>developer docs</inlinetextlink> for more help.",values:{inlinetextlink:(...e)=>r()(ge.a,{href:"https://developers.notion.com/#handling-errors"},void 0,e)},description:"Do not translate 'response_type', it's code."}),integration:g.state.value});if(e){const t=Object(ne.b)(n,e),i=503===e.status?re.a.temporarily_unavailable:re.a.server_error;return this.renderError({type:i,body:t,integration:g.state.value})}if(t&&!e){const{botIds:e}=t,i=e.map(e=>Object(W.c)(s,{table:V.a,id:e}).getValue()).find(e=>(null==e?void 0:e.integration_id)===a);return i&&i.created_by_id!==s.id?this.renderError({type:re.a.access_denied,title:r()(P.FormattedMessage,{id:"oauthAuthorizationPage.error.integrationAlreadyInstalled.title",defaultMessage:"This integration has already been added to {workspaceName}",values:{workspaceName:h}}),body:r()(P.FormattedMessage,{id:"oauthAuthorizationPage.error.integrationAlreadyInstalled.body",defaultMessage:"You can review and remove added integrations in Settings."}),integration:g.state.value,primaryAction:r()(m.a,{isLarge:!0,onClick:()=>{S.b({environment:this.environment,spaceViewStore:l,spaceStore:d,userSettingsStore:c,userRootStore:s})}},void 0,r()(P.FormattedMessage,{id:"oauthAuthorizationPage.error.integrationAlreadyInstalled.openWorkspaceSettingsButton.label",defaultMessage:"Open Settings"}))}):this.renderAuthorizationPage(g.state.value,null==i?void 0:i.id)}}),d()(this,"getPageItem",(e,t)=>{const{selectedPageIdsStore:i}=this.stores,{device:o}=this.environment,n=i.state.has(e.id);return{key:e.id,action:()=>this.handleClickPage(e.id,n),render:i=>c.a.createElement(te,a()({},i,{isMobile:o.isMobile,store:e,isChecked:n,disabled:!1,nestingLevel:t}))}}),d()(this,"getPageSectionHeader",(e,t)=>{const{selectedPageIdsStore:i}=this.stores,{device:o}=this.environment,n=t.length>0&&t.every(e=>i.state.has(e.id));return{key:e,action:()=>this.handleClickSection(t),render:t=>c.a.createElement($.a,a()({},t,{title:r()(Q.a,{left:r()(X.a,{onClick:t.onClick,checked:n,size:16}),isMobile:o.isMobile,style:{textTransform:"uppercase",fontSize:12,fontWeight:600,color:this.theme.mediumTextColor,padding:"2px 0"}},void 0,e)}))}}),d()(this,"getEmptyState",()=>{const{device:e}=this.environment;return{key:"empty",action:()=>{},render:t=>c.a.createElement($.a,a()({},t,{title:r()(Q.a,{isMobile:e.isMobile,style:{fontSize:14,color:this.theme.mediumTextColor,padding:"2px 32px"}},void 0,r()(P.FormattedMessage,{id:"oauthAuthorizationPage.selectPageStep.empty",defaultMessage:"No pages inside"}))}))}}),d()(this,"switchToPagePickerStep",()=>{this.stores.authorizationStepStore.setState("page_picker")}),d()(this,"switchToPermissionsStep",()=>{this.stores.authorizationStepStore.setState("permissions")}),d()(this,"handleCancel",e=>{S.a({environment:this.environment,params:this.props,integration:e,errorType:re.a.access_denied})}),d()(this,"handleAuthorize",(e,t,i)=>{S.a({environment:this.environment,params:this.props,integration:e,spaceId:t,initialBlockIdsForBot:Array.from(this.stores.selectedPageIdsStore.state)})}),d()(this,"handleClickPage",(e,t)=>{const{selectedPageIdsStore:i}=this.stores,o=i.state;t?o.delete(e):o.add(e),i.emit()}),d()(this,"handleClickSection",e=>{const{selectedPageIdsStore:t}=this.stores,i=t.state;e.every(e=>i.has(e.id))?e.forEach(e=>i.delete(e.id)):e.forEach(e=>i.add(e.id)),t.emit()})}willMount(){const{responseType:e,integrationId:t,redirectUri:i,state:o}=this.props;de.setOauthAuthorizationParams({responseType:e,integrationId:t,redirectUri:i,state:o})}async didMount(){const{currentSpaceStore:e,currentSpaceViewStore:t}=b.default.state;e&&t&&e.canAdmin()||await this.setCurrentSpaceToFirstAdminSpace()}renderComponent(){const{currentSpaceStore:e}=b.default.state;if(e)return r()("div",{style:this.getLayoutContainerStyle()},void 0,r()("div",{style:this.getPageContainerStyle()},void 0,r()("div",{style:this.getContentBoxStyle()},void 0,this.renderTopbar(),r()("div",{style:this.getContentBodyStyle()},void 0,r()(D.a,{requestStore:this.stores.botsRequestStore,request:{environment:this.environment,table:_.a,id:e.id,type:"guest"},performRequest:U.e,render:this.renderRequestResult})))))}renderAuthorizationPage(e,t){const{redirectUri:i}=this.props,{currentSpaceStore:o,currentSpaceViewStore:a}=b.default.state;if(!o||!a)return;const n=Object(x.getSpaceName)(this.environment,o);return o.state.value&&o.canAdmin()?se.a(e,i)?"permissions"===this.stores.authorizationStepStore.state||t?this.renderPermissionsStep(e,o,t):this.renderPagePickerStep(e,o,a):this.renderError({type:re.a.invalid_request,body:r()(P.FormattedMessage,{id:"oauthAuthorizationPage.error.invalidRedirectUri.body",defaultMessage:"Missing or invalid redirect_uri. See <inlinetextlink>developer docs</inlinetextlink> for more help.",values:{inlinetextlink:(...e)=>r()(ge.a,{href:"https://developers.notion.com/#handling-errors"},void 0,e)},description:"Do not translate 'redirect_uri', it's code."}),integration:e}):this.renderError({type:re.a.access_denied,title:r()(P.FormattedMessage,{id:"oauthAuthorizationPage.error.notAnAdmin.title",defaultMessage:"You're not allowed to add integrations to {workspaceName}",values:{workspaceName:n}}),body:r()(P.FormattedMessage,{id:"oauthAuthorizationPage.error.notAnAdmin.body",defaultMessage:"Contact an admin to grant you admin access, or switch to another workspace."}),integration:e,primaryAction:r()(m.a,{isLarge:!0,onClick:()=>he.a.setState({...he.a.state,open:!0})},void 0,r()(P.FormattedMessage,{id:"oauthAuthorizationPage.error.notAnAdmin.switchWorkspaceButton.label",defaultMessage:"Switch workspace"}))})}renderPermissionsStep(e,t,i){const o=Object(x.getSpaceName)(this.environment,t),a=e.info.website_url,n=e.info.terms_of_use_url,s=e.info.privacy_policy_url,d=e.info.icon?{pointer:{table:R.a,id:e.id},icon:e.info.icon}:void 0,l=this.props.redirectUri?this.props.redirectUri.replace("http://","").replace("https://","").split(/[/?#]/)[0]:void 0;return c.a.createElement(c.a.Fragment,null,r()("div",{style:{padding:15}},void 0,r()(J.a,{icon:d,disabled:!0,title:e.name,size:54,isEmptyPage:!1,style:{margin:"auto"}})),r()("div",{style:this.getTitleStyle()},void 0,r()(P.FormattedMessage,{id:"oauthAuthorizationPage.permissionStep.title",defaultMessage:"<inlinetextlink>{integrationName}</inlinetextlink> wants to access {workspaceName}",values:{integrationName:e.name,workspaceName:o,inlinetextlink:(...e)=>a?r()(ge.a,{style:{...this.getInlineTextLinkStyle(),fontWeight:p.a.fontWeight.semibold},href:a},void 0,e):e}})),r()("div",{style:{marginBottom:8}},void 0,r()(P.FormattedMessage,{id:"oauthAuthorizationPage.permissionStep.intro",defaultMessage:"<inlinetextlink>{integrationName}</inlinetextlink> wants to",values:{integrationName:e.name,inlinetextlink:(...e)=>a?r()(ge.a,{href:a,style:this.getInlineTextLinkStyle()},void 0,e):e}})),r()(me,{icon:h.a.pencil,title:r()(P.FormattedMessage,{id:"oauthAuthorizationPage.permissionStep.permissionListItem.viewAndEditPages",defaultMessage:"View and edit pages you select",description:"This is one of the things an integration can do once it's added to a user's workspace."})},void 0,r()(P.FormattedMessage,{id:"oauthAuthorizationPage.permissionStep.permissionListItem.viewAndEditPages.description",defaultMessage:"{integrationName} will be able to view and edit pages you select in the next step. You can also share pages later with the {integrationName} via the Share menu.",values:{integrationName:e.name,workspaceName:o}})),r()(me,{icon:h.a.plus,title:r()(P.FormattedMessage,{id:"oauthAuthorizationPage.permissionStep.permissionListItem.addNewPages",defaultMessage:"Add new pages to {workspaceName}",values:{workspaceName:o},description:"This is one of the things an integration can do once it's added to a user's workspace."})},void 0,r()(P.FormattedMessage,{id:"oauthAuthorizationPage.permissionStep.permissionListItem.addNewPages.details",defaultMessage:"{integrationName} will be able to add new pages inside pages it has access to.",values:{integrationName:e.name}})),r()(me,{icon:h.a.settingsMembers,title:r()(P.FormattedMessage,{id:"oauthAuthorizationPage.permissionStep.permissionListItem.viewUsers",defaultMessage:"View names and emails",description:"This is one of the things an integration can do once it's added to a user's workspace."})},void 0,r()(P.FormattedMessage,{id:"oauthAuthorizationPage.permissionStep.permissionListItem.viewUsers.detail",defaultMessage:"{integrationName} will be able to see all workspace members and guests and their email addresses.",values:{integrationName:e.name}})),this.renderOptionButtons({leftText:r()(P.FormattedMessage,{id:"oauthAuthorizationPage.permissionStep.cancelButton.label",defaultMessage:"Cancel"}),leftAction:()=>this.handleCancel(e),rightText:r()(P.FormattedMessage,i?{id:"oauthAuthorizationPage.permissionStep.finishButton.label",defaultMessage:"Allow access",description:"This button will complete OAuth early and redirect the user."}:{id:"oauthAuthorizationPage.permissionStep.continueButton.label",defaultMessage:"Select pages",description:"This button will take a user to a screen where they can choose pages to share with an integration."}),rightAction:i?()=>this.handleAuthorize(e,t.id,i):this.switchToPagePickerStep}),r()("footer",{style:this.getFooterStyle()},void 0,r()("div",{style:{color:this.theme.regularTextColor,fontWeight:p.a.fontWeight.semibold,marginBottom:4}},void 0," ",r()(P.FormattedMessage,{id:"oauthAuthorizationPage.permissionStep.warning.title",defaultMessage:"Make sure you trust {integrationName} ({redirectUriDomain})",values:{integrationName:e.name,redirectUriDomain:l}})),r()("div",{},void 0,r()(P.FormattedMessage,{id:"oauthAuthorizationPage.permissionStep.warning.body",defaultMessage:"If you continue, you may be sharing sensitive information. Notion does not review third party integrations such as {integrationName}. Learn how {integrationName} handles your data by reviewing their <privacypolicylink>Privacy Policy</privacypolicylink> and <termsofservicelink>Terms of Service</termsofservicelink>.",values:{integrationName:e.name,privacypolicylink:(...e)=>s?r()(ge.a,{href:s},void 0,e):e,termsofservicelink:(...e)=>n?r()(ge.a,{href:n},void 0,e):e}}))))}renderPagePickerStep(e,t,i){const{intl:o}=this.props;if(!this.sidebarState.state)return r()(O.a,{});const{allSharedPagesStores:n,showWorkspaceSection:s,showSharedSection:d,showPrivateSection:l,showOnlyPrivateSection:h}=this.sidebarState.state,{selectedPageIdsStore:g}=this.stores,p=i.getWorkspacePages().filter(e=>e.state.value&&"copy_indicator"!==e.state.value.type),m=i.getPrivatePages().filter(e=>e.state.value&&"copy_indicator"!==e.state.value.type),u=[...g.state].map(e=>new E.a(this.environment,{table:ae.a,id:e})).filter(e=>!e.isTopLevelPrivatePage(t.id)&&!e.isTopLevelWorkspacePage(t.id)&&!n.some(t=>t.id===e.id)),S=u.length>0,v=Object(x.getSpaceName)(this.environment,t),f=oe.a.compact([S&&{key:"manual",render:e=>c.a.createElement(y.a,a()({},e,{title:r()(P.FormattedMessage,{id:"oauthAuthorizationPage.selectPagesStep.pagePicker.manuallyAddedPagesSection.title",defaultMessage:"Manually added"}),isTitleUppercase:!0})),items:u.map(this.getPageItem)},s&&{key:"workspace",render:e=>c.a.createElement(y.a,e),items:oe.a.compact([this.getPageSectionHeader(o.formatMessage({id:"oauthAuthorizationPage.selectPagesStep.pagePicker.workspaceSection.title",defaultMessage:"Workspace",description:"This word is used in the same context as the title for the Workspace section of the sidebar."}),p),0===p.length&&this.getEmptyState(),...p.map(e=>this.getPageItem(e,1))])},d&&{key:"shared",render:e=>c.a.createElement(y.a,e),items:oe.a.compact([this.getPageSectionHeader(o.formatMessage({id:"oauthAuthorizationPage.selectPagesStep.pagePicker.sharedSection.title",defaultMessage:"Shared",description:"This word is used in the same context as the title for the Shared section of the sidebar."}),n),0===n.length&&this.getEmptyState(),...n.map(e=>this.getPageItem(e,1))])},l&&{key:"private",render:e=>c.a.createElement(y.a,e),items:oe.a.compact([this.getPageSectionHeader(h?v||"":o.formatMessage({id:"oauthAuthorizationPage.selectPagesStep.pagePicker.privateSection.title",defaultMessage:"Private",description:"This word is used in the same context as the title for the Private section of the sidebar."}),m),0===m.length&&this.getEmptyState(),...m.map(e=>this.getPageItem(e,1))])}]);return c.a.createElement(c.a.Fragment,null,r()("div",{style:this.getSubtitleStyle()},void 0,r()(P.FormattedMessage,{id:"oauthAuthorizationPage.selectPagesStep.title",defaultMessage:"Allow {integrationName} to access these pages",values:{integrationName:e.name}})),r()("div",{style:this.getPagePickerContainerStyle()},void 0,r()(G.a,{type:G.a.Type.Vertical,sections:f,initialFocus:void 0})),this.renderOptionButtons({leftText:r()(P.FormattedMessage,{id:"oauthAuthorizationPage.selectPagesStep.backButton.label",defaultMessage:"Back"}),leftAction:this.switchToPermissionsStep,rightText:r()(P.FormattedMessage,{id:"oauthAuthorizationPage.selectPagesStep.finishButton.label",defaultMessage:"Allow access",description:"This button, once clicked, adds an integration to a user's workspace and automatically gives it access to a set of pages the user selected."}),rightAction:()=>this.handleAuthorize(e,t.id)}))}renderTopbar(){const{selectedPageIdsStore:e}=this.stores,{isMobile:t}=this.environment.device;return r()("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:60,paddingLeft:20,paddingRight:8,borderBottomWidth:1,borderBottomStyle:"solid",borderBottomColor:Y.h.contentBorder}},void 0,h.a.notionLogoStroked({width:t?28:30,height:t?28:30,marginRight:10,flexShrink:0}),r()("div",{style:{fontWeight:p.a.fontWeight.medium,fontSize:16}},void 0,"Notion"),r()("div",{style:{flexGrow:1,flexShrink:1}}),r()("div",{style:{flexShrink:0}},void 0,r()(B,{format:I.a.Regular,onSpaceClick:async({spaceViewStore:t})=>{e.setState(new Set),await N.v({environment:this.environment,spaceViewStore:t})},shouldShowUnexpandButton:!1,disableLoginLink:!0,buttonStyle:{borderRadius:3,marginBottom:0}})))}renderOptionButtons(e){return r()("div",{style:this.getButtonGroupStyle()},void 0,r()(u.a,{isLarge:!0,onClick:e.leftAction,style:{height:32}},void 0,e.leftText),r()(m.a,{isLarge:!0,onClick:e.rightAction},void 0,e.rightText))}renderError({integration:e,type:t,title:i,body:o,primaryAction:a}){const n=i||r()(P.FormattedMessage,{id:"oauthAuthorizationPage.error.genericError.title",defaultMessage:"Something went wrong"});return r()("section",{style:this.getErrorContainerStyle()},void 0,h.a.genericError(this.getErrorIconStyle()),r()("header",{style:{...this.getTitleStyle(),marginBottom:12}},void 0,n),o&&r()("p",{style:this.getErrorBodyStyle()},void 0,o),a&&r()("div",{style:this.getErrorBodyStyle()},void 0,a),r()(u.a,{onClick:()=>{S.a({environment:this.environment,integration:e,errorType:t,params:this.props})}},void 0,r()(P.FormattedMessage,{id:"oauthAuthorizationPage.error.cancelButton.label",defaultMessage:"Cancel"})))}async setCurrentSpaceToFirstAdminSpace(){const{currentUserRootStore:e}=b.default.state;if(e){const t=e.getSpaceViewStores();if(t.length>0){const e=t.find(e=>e.canAdmin());return void(await N.v({environment:this.environment,spaceViewStore:e||t[0]}))}}ce.navigate({environment:this.environment,url:le.d.login,redirect:!0})}getLayoutContainerStyle(){const{WindowSizeStore:e}=this.environment;return{height:"100%",overflow:"auto",backgroundColor:e.state.width>500?Y.h.frontCreamBackground:Y.h.white}}getPageContainerStyle(){return{display:"flex",justifyContent:"center"}}getContentBoxStyle(){const{WindowSizeStore:e}=this.environment,t=e.state.width>500,i=e.state.height<600?16:t?"calc((100vh - 600px) / 2)":0,o=t?this.theme.lightBoxShadow:"none";return{width:"500px",minHeight:"600px",borderRadius:5,backgroundColor:Y.h.white,boxShadow:o,display:"flex",flexDirection:"column",fontSize:p.a.fontSize.UIRegular.desktop,marginTop:i,transition:"all 0.2s ease"}}getContentBodyStyle(){return{paddingLeft:40,paddingRight:40,paddingTop:25,paddingBottom:25,flex:1,display:"flex",flexDirection:"column"}}getFooterStyle(){return{fontSize:p.a.fontSize.UISmall.desktop,color:this.theme.mediumTextColor,paddingTop:32,paddingBottom:16}}getTitleStyle(){const{device:e}=this.environment;return{fontSize:e.isMobile?18:20,margin:"0 50px 32px",textAlign:"center",fontWeight:p.a.fontWeight.medium}}getSubtitleStyle(){return{fontSize:14,textAlign:"center",fontWeight:p.a.fontWeight.medium,marginBottom:16}}getButtonGroupStyle(){return{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginTop:24}}getPagePickerContainerStyle(){return{alignItems:"left",width:"100%",height:380,borderWidth:1,borderStyle:"solid",borderColor:Y.h.contentBorder,overflowY:"auto"}}getErrorContainerStyle(){return{textAlign:"center",flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}getErrorIconStyle(){const{device:e}=this.environment,t=e.isMobile?25:48;return{fill:Y.h.red,width:t,height:t,marginBottom:20,display:"inline-block"}}getErrorBodyStyle(){return{marginTop:0,marginBottom:24,width:"80%"}}getInlineTextLinkStyle(){return{borderBottom:"1px solid rgba(54, 53, 47, 0.2)",color:"black",textDecoration:"none"}}}function me(e){const[t,i]=Object(l.useState)(!1),o=Object(q.a)(e=>({permissionItem:{display:"flex",justifyContent:"space-between",padding:"6px 0",cursor:"pointer",userSelect:"none"},permissionItemHeading:{display:"flex",alignItems:"center"},permissionItemDetails:{paddingLeft:32,transition:"all 0.2s ease",color:e.mediumTextColor},rightStyle:{width:22,height:18},sharedIconStyle:{width:24,height:16,textAlign:"center",marginRight:8}}),[]);return c.a.createElement(c.a.Fragment,null,r()("div",{style:o.permissionItem,onClick:()=>i(!t)},void 0,r()("div",{style:o.permissionItemHeading},void 0,r()("div",{style:o.sharedIconStyle},void 0,e.icon({width:16,height:16,color:Y.h.regularIconColor})),r()("div",{},void 0,e.title)),e.children&&r()("div",{},void 0,h.a.chevronDownThin({width:12,height:12,color:Y.h.lightIconColor,transform:t?"rotate(180deg)":void 0,transition:"transform 0.2s ease"}))),r()("div",{style:{...o.permissionItemDetails,opacity:t?1:0,flex:t?1:0,paddingBottom:t?8:0,transform:t?"translate3d(0,-4px,0)":"translate3d(0,-8px,0)"}},void 0,t&&e.children))}t.default=Object(P.injectIntl)(pe)}}]);