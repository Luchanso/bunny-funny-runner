(window.webpackJsonp=window.webpackJsonp||[]).push([[0,1],{"./node_modules/material-ui/Typography/Typography.js":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.styles=void 0;var o=p(a("./node_modules/babel-runtime/helpers/extends.js")),r=p(a("./node_modules/babel-runtime/helpers/defineProperty.js")),l=p(a("./node_modules/babel-runtime/helpers/objectWithoutProperties.js")),n=p(a("./node_modules/react/index.js")),s=(p(a("./node_modules/prop-types/index.js")),p(a("./node_modules/classnames/index.js"))),i=p(a("./node_modules/material-ui/styles/withStyles.js")),d=a("./node_modules/material-ui/utils/helpers.js");function p(e){return e&&e.__esModule?e:{default:e}}var u=t.styles=function(e){return{root:{display:"block",margin:0},display4:e.typography.display4,display3:e.typography.display3,display2:e.typography.display2,display1:e.typography.display1,headline:e.typography.headline,title:e.typography.title,subheading:e.typography.subheading,body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:2*e.spacing.unit},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main}}};function c(e){var t,a=e.align,i=e.classes,p=e.className,u=e.component,c=e.color,y=e.gutterBottom,h=e.headlineMapping,m=e.noWrap,g=e.paragraph,f=e.variant,b=(0,l.default)(e,["align","classes","className","component","color","gutterBottom","headlineMapping","noWrap","paragraph","variant"]),_=(0,s.default)(i.root,i[f],(t={},(0,r.default)(t,i["color"+(0,d.capitalize)(c)],"default"!==c),(0,r.default)(t,i.noWrap,m),(0,r.default)(t,i.gutterBottom,y),(0,r.default)(t,i.paragraph,g),(0,r.default)(t,i["align"+(0,d.capitalize)(a)],"inherit"!==a),t),p),j=u||(g?"p":h[f])||"span";return n.default.createElement(j,(0,o.default)({className:_},b))}c.propTypes={},c.defaultProps={align:"inherit",color:"default",gutterBottom:!1,headlineMapping:{display4:"h1",display3:"h1",display2:"h1",display1:"h1",headline:"h1",title:"h2",subheading:"h3",body2:"aside",body1:"p"},noWrap:!1,paragraph:!1,variant:"body1"},t.default=(0,i.default)(u,{name:"MuiTypography"})(c)},"./node_modules/material-ui/Typography/index.js":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("./node_modules/material-ui/Typography/Typography.js");Object.defineProperty(t,"default",{enumerable:!0,get:function(){return(e=o,e&&e.__esModule?e:{default:e}).default;var e}})},"./src/containers/Shop/Shop.jsx":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=c(a("./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),r=c(a("./node_modules/babel-runtime/helpers/classCallCheck.js")),l=c(a("./node_modules/babel-runtime/helpers/createClass.js")),n=c(a("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),s=c(a("./node_modules/babel-runtime/helpers/inherits.js")),i=c(a("./node_modules/react/index.js")),d=a("./node_modules/prop-types/index.js"),p=a("./node_modules/material-ui/styles/index.js"),u=c(a("./node_modules/material-ui/Typography/index.js"));function c(e){return e&&e.__esModule?e:{default:e}}var y={container:{backgroundColor:"#"+a("./src/config.js").config.backgroundColor.toString(16),width:"100%",height:"100%"}},h=function(e){function t(){return(0,r.default)(this,t),(0,n.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,s.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props.classes;return i.default.createElement("div",{className:e.container},i.default.createElement(u.default,{variant:"display3"},"My Awesome Shop"))}}]),t}(i.default.Component);h.propTypes={classes:(0,d.shape)({}).isRequired},t.default=(0,p.withStyles)(y)(h)},"./src/containers/Shop/index.js":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=a("./src/containers/Shop/Shop.jsx"),l=(o=r)&&o.__esModule?o:{default:o};t.default=l.default}}]);