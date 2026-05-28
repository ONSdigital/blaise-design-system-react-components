import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{R as n}from"./iframe-B6lp3Trv.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";var i,a,o,s=e((()=>{i=t(n(),1),a=r(),o=({label:e,id:t,password:n,number:r,onChange:o,placeholder:s,fit:c,autoFocus:l,value:u,autoComplete:d,onClick:f,zIndex:p})=>{let m=(0,i.useId)(),h=t??`text-input-${m}`;return(0,a.jsxs)(`div`,{className:`ons-field`,children:[e!==void 0&&(0,a.jsx)(`label`,{className:`ons-label`,htmlFor:h,children:e}),(0,a.jsx)(`input`,{id:h,className:`ons-input ons-input--text ons-input-type__input`,value:u??``,type:n?`password`:r?`number`:`text`,style:{width:c?`unset`:void 0,zIndex:p},autoFocus:l,autoComplete:d,placeholder:s,onChange:e=>{o?.(e,e.target.value)},onClick:f,"data-testid":t?`${t}-input`:void 0})]})};try{o.displayName=`TextInput`,o.__docgenInfo={description:`Renders a text, password, or number input.`,displayName:`TextInput`,filePath:`/home/runner/work/blaise-design-system-react-components/blaise-design-system-react-components/src/components/TextInput.tsx`,methods:[],props:{label:{defaultValue:null,declarations:[{fileName:`blaise-design-system-react-components/src/components/TextInput.tsx`,name:`Props`}],description:`Label text.`,name:`label`,parent:{fileName:`blaise-design-system-react-components/src/components/TextInput.tsx`,name:`Props`},required:!1,tags:{},type:{name:`string | undefined`}},id:{defaultValue:null,declarations:[{fileName:`blaise-design-system-react-components/src/components/TextInput.tsx`,name:`Props`}],description:`Element ID.`,name:`id`,parent:{fileName:`blaise-design-system-react-components/src/components/TextInput.tsx`,name:`Props`},required:!1,tags:{},type:{name:`string | undefined`}},password:{defaultValue:null,declarations:[{fileName:`blaise-design-system-react-components/src/components/TextInput.tsx`,name:`Props`}],description:"Whether to use `password` type. Overrides `number`.",name:`password`,parent:{fileName:`blaise-design-system-react-components/src/components/TextInput.tsx`,name:`Props`},required:!1,tags:{},type:{name:`boolean | undefined`}},number:{defaultValue:null,declarations:[{fileName:`blaise-design-system-react-components/src/components/TextInput.tsx`,name:`Props`}],description:"Whether to use `number` type.",name:`number`,parent:{fileName:`blaise-design-system-react-components/src/components/TextInput.tsx`,name:`Props`},required:!1,tags:{},type:{name:`boolean | undefined`}},onChange:{defaultValue:null,declarations:[{fileName:`blaise-design-system-react-components/src/components/TextInput.tsx`,name:`Props`}],description:`Called when the value changes.`,name:`onChange`,parent:{fileName:`blaise-design-system-react-components/src/components/TextInput.tsx`,name:`Props`},required:!1,tags:{},type:{name:`((e: ChangeEvent<HTMLInputElement, Element>, value: string) => void) | undefined`}},placeholder:{defaultValue:null,declarations:[{fileName:`blaise-design-system-react-components/src/components/TextInput.tsx`,name:`Props`}],description:`Placeholder text displayed when the input is empty.`,name:`placeholder`,parent:{fileName:`blaise-design-system-react-components/src/components/TextInput.tsx`,name:`Props`},required:!1,tags:{},type:{name:`string | undefined`}},fit:{defaultValue:null,declarations:[{fileName:`blaise-design-system-react-components/src/components/TextInput.tsx`,name:`Props`}],description:`Whether to remove the default width.`,name:`fit`,parent:{fileName:`blaise-design-system-react-components/src/components/TextInput.tsx`,name:`Props`},required:!1,tags:{},type:{name:`boolean | undefined`}},autoFocus:{defaultValue:null,declarations:[{fileName:`blaise-design-system-react-components/src/components/TextInput.tsx`,name:`Props`}],description:`Whether to focus the input on mount.`,name:`autoFocus`,parent:{fileName:`blaise-design-system-react-components/src/components/TextInput.tsx`,name:`Props`},required:!1,tags:{},type:{name:`boolean | undefined`}},value:{defaultValue:null,declarations:[{fileName:`blaise-design-system-react-components/src/components/TextInput.tsx`,name:`Props`}],description:`Input value.`,name:`value`,parent:{fileName:`blaise-design-system-react-components/src/components/TextInput.tsx`,name:`Props`},required:!1,tags:{},type:{name:`string | undefined`}},autoComplete:{defaultValue:null,declarations:[{fileName:`blaise-design-system-react-components/src/components/TextInput.tsx`,name:`Props`}],description:`Autocomplete attribute.`,name:`autoComplete`,parent:{fileName:`blaise-design-system-react-components/src/components/TextInput.tsx`,name:`Props`},required:!1,tags:{},type:{name:`string | undefined`}},onClick:{defaultValue:null,declarations:[{fileName:`blaise-design-system-react-components/src/components/TextInput.tsx`,name:`Props`}],description:`Called when the input is clicked.`,name:`onClick`,parent:{fileName:`blaise-design-system-react-components/src/components/TextInput.tsx`,name:`Props`},required:!1,tags:{},type:{name:`MouseEventHandler<HTMLInputElement> | undefined`}},zIndex:{defaultValue:null,declarations:[{fileName:`blaise-design-system-react-components/src/components/TextInput.tsx`,name:`Props`}],description:`Input z-index.`,name:`zIndex`,parent:{fileName:`blaise-design-system-react-components/src/components/TextInput.tsx`,name:`Props`},required:!1,tags:{},type:{name:`number | undefined`}}},tags:{}}}catch{}})),c,l,u,d,f,p,m,h,g;e((()=>{c=t(n(),1),s(),l=r(),u=e=>{let[t,n]=(0,c.useState)(e.value||``);return(0,l.jsx)(o,{...e,value:t,onChange:(t,r)=>{n(r),e.onChange?.(t,r)}})},d={title:`Components/Text Input`,component:o,argTypes:{onChange:{action:`changed`},onClick:{action:`clicked`}},render:e=>(0,l.jsx)(u,{...e})},f={args:{id:`text-input`,label:`Text Input`,autoFocus:!0,value:``}},p={args:{...f.args,id:`text-input-placeholder`,label:`Name`,placeholder:`e.g. John Doe`,value:``}},m={args:{...f.args,id:`text-input-value`,label:`Biff`,value:`Well, lookee what we have here`}},h={render:e=>(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,l.jsx)(`div`,{children:(0,l.jsx)(o,{...e,id:`text-input-fit-false`,label:`False (Design System default)`,fit:!1})}),(0,l.jsx)(`div`,{children:(0,l.jsx)(o,{...e,id:`text-input-fit-true`,label:`True (browser default)`,fit:!0})})]}),args:{value:``,autoFocus:!1}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    id: "text-input",
    label: "Text Input",
    autoFocus: true,
    value: ""
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "text-input-placeholder",
    label: "Name",
    placeholder: "e.g. John Doe",
    value: ""
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "text-input-value",
    label: "Biff",
    value: "Well, lookee what we have here"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }}>
      <div>
        <TextInput {...args} id="text-input-fit-false" label="False (Design System default)" fit={false} />
      </div>
      <div>
        <TextInput {...args} id="text-input-fit-true" label="True (browser default)" fit={true} />
      </div>
    </div>,
  args: {
    value: "",
    autoFocus: false
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`,`Placeholder`,`Value`,`Fit`]}))();export{f as Default,h as Fit,p as Placeholder,m as Value,g as __namedExportsOrder,d as default};