import React, {useEffect} from 'react'
import styles from './Sample.module.scss'
import {useDispatch, useSelector} from 'react-redux'
import SampleThunks from '../../api/samples/SampleThunks'
import {AppDispatch, RootState} from '../../store/store'

type SampleProps = {
    children?: React.ReactNode
}

const Sample = (props: SampleProps) => {
    const dispatch = useDispatch<AppDispatch>()

    const { samples } = useSelector((state: RootState) => state.samples)
    useEffect(() => { dispatch(SampleThunks.getMany({})) }, [])

    return (
        <div className={styles.Sample} data-testid="Sample">
            { samples.map(sample => <div key={sample.id}> {sample.name} | {sample.date} | {sample.exampleField} </div>) }
        </div>
    )
}

export default Sample
