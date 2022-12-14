import styled from 'styled-components'
import { LoaderShade } from '/src/components/overlay/shade'

const Panel = styled.div`
  position: relative;
  padding: 12px;
  background-color: var(--panel-background);
  border-radius: var(--panel-border-radius);
  display: flex;
  flex-direction: column;
  gap: var(--base-gap-medium);

  &.transparent {
    background-color: transparent;
  }

  &.nopad {
    padding: 0;
  }
`

const TablePanel = (props) => (
  <Panel
    className={props.className}
    style={{
      padding: 0,
      minHeight: 150,
      flexGrow: 1,
      ...(props.style || {}),
    }}
  >
    <div style={{ flexGrow: 1, position: 'relative' }}>
      {props.loading ? <LoaderShade /> : null}
      <div
        style={{
          position: 'absolute',
          top: 3, // prevent header covering rounded corners of the parent panel
          left: 0,
          right: 0,
          bottom: 0,
          padding: 0,
        }}
      >
        {props.children}
      </div>
    </div>
  </Panel>
)

const ScrollPanel = (props) => (
  <Panel
    className={props.className}
    style={{
      padding: 0,
      ...(props.style || {}),
    }}
  >
    <div
      style={{
        position: 'absolute',
        padding: 12,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'scroll',
        gap: 'var(--base-gap-medium)',
        ...(props.scrollStyle || {}),
      }}
    >
      {props.children}
    </div>
  </Panel>
)

export { Panel, TablePanel, ScrollPanel }
