import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./Button-DRdnJbmi.js";var i,a,o,s,c,l,u,d,f;e((()=>{n(),i=t(),a={title:`Components/Button`,component:r,argTypes:{onClick:{action:`clicked`}}},o={args:{id:`button-primary`,primary:!0,label:`Primary Button`}},s={args:{id:`button-secondary`,primary:!1,label:`Secondary Button`}},c={args:{...o.args,id:`button-small`,label:`Small Button`,small:!0}},l={args:{...o.args,id:`button-loading`,label:`Loading Button`,loading:!0}},u={args:{...o.args,id:`button-hidden`,label:`Hidden Button`,hidden:!0}},d={args:{id:`button-margin-right`,primary:!0,label:`Margin Right Buttons`},render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`,alignItems:`flex-start`},children:[(0,i.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`},children:[(0,i.jsx)(r,{id:`button-no-margin`,primary:!0,label:`Button`}),(0,i.jsx)(`span`,{children:`No right margin`})]}),(0,i.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`},children:[(0,i.jsx)(r,{id:`button-with-margin`,primary:!0,label:`Button`,marginRight:24}),(0,i.jsx)(`span`,{children:`With right margin (24px)`})]})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    id: "button-primary",
    primary: true,
    label: "Primary Button"
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    id: "button-secondary",
    primary: false,
    label: "Secondary Button"
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    id: "button-small",
    label: "Small Button",
    small: true
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    id: "button-loading",
    label: "Loading Button",
    loading: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    id: "button-hidden",
    label: "Hidden Button",
    hidden: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    id: "button-margin-right",
    primary: true,
    label: "Margin Right Buttons"
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    alignItems: "flex-start"
  }}>
      <div style={{
      display: "flex",
      alignItems: "center"
    }}>
        <Button id="button-no-margin" primary={true} label="Button" />
        <span>No right margin</span>
      </div>
      <div style={{
      display: "flex",
      alignItems: "center"
    }}>
        <Button id="button-with-margin" primary={true} label="Button" marginRight={24} />
        <span>With right margin (24px)</span>
      </div>
    </div>
}`,...d.parameters?.docs?.source}}},f=[`Primary`,`Secondary`,`Small`,`Loading`,`Hidden`,`MarginRight`]}))();export{u as Hidden,l as Loading,d as MarginRight,o as Primary,s as Secondary,c as Small,f as __namedExportsOrder,a as default};