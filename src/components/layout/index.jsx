import styled from 'styled-components'

const Section = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  flex-grow: 1;
  gap: var(--base-gap-large);

  // column is implicit

  flex-direction: column;
  & > * {
    width: 100%;
  }

  &.row {
    flex-direction: row;
    & > * {
      width: 100%;
    }
  }

  &.wrap {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

const Toolbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
`

const Spacer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
`

// Form layout

const FormLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--base-gap-medium);
`

const BaseFormRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;

  .label {
    min-width: 120px;
    display: block;
    height: var(--base-input-size);
    line-height: var(--base-input-size);
  }

  .field {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: left;

    .colorpick-eyedropper-input-trigger {
      display: none;
    }
  }
`

const FormRow = ({ label, children, className, style }) => {
  return (
    <BaseFormRow className={className} style={style}>
      <div className="label">{label}</div>
      <div className="field">{children}</div>
    </BaseFormRow>
  )
}

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;

  ${(props) =>
    !props.children &&
    `
    border-bottom: 1px solid var(--color-grey-03);
  `}

  ${(props) =>
    props.children &&
    `
    &::before,
    &::after {
      content: '';
      height: 1px;
      background-color: var(--color-grey-03);
    }

    &::before {
      margin-right: 2rem;
      flex-basis: 200px;
    }

    &::after {
      margin-left: 2rem;
      flex-grow: 1;
    }
  `}
`

export { Section, Toolbar, Spacer, FormLayout, FormRow, Divider }
