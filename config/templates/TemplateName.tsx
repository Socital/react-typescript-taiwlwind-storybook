import React from 'react'
import styles from './TemplateName.module.scss'

type TemplateNameProps = {
    test?: string
}

const TemplateName = (props: TemplateNameProps) => (
    <div className={styles.Sample} data-testid="TemplateName">
        TemplateName Component
    </div>
)

export default TemplateName
