import React, {useEffect} from 'react'
import styles from './Sample.module.scss'
import {useDispatch} from 'react-redux'
import SampleThunks from '../../api/samples/SampleThunks'
import {AppDispatch} from '../../store/store'

type SampleProps = {
    children?: React.ReactNode
}

const Sample = (props: SampleProps) => {
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => { dispatch(SampleThunks.getMany({})) }, [])

    return (
        <div className={styles.Sample} data-testid="Sample">
            { props.children }
        </div>
    )
}

export default Sample
