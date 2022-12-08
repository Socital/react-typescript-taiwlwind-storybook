import React from 'react'
import styles from './Sample.module.scss'

type SampleProps = {
    children: React.ReactNode
}

const Sample = (props: SampleProps) => (
    <div className={styles.Sample} data-testid="Sample">
        { props.children }
    </div>
)

export default Sample
