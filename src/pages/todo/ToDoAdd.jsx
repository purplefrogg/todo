import { Field, Form, Formik } from 'formik'
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/todo-Reducer';
import { required } from '../../utils/validators';
import style from './ToDo.module.scss'



export let ToDoAdd = () => {
    const dispatch = useDispatch()
    return (<div>
        <Formik
            initialValues={{
                text: '',
            }}
            onSubmit={(values, { resetForm, initialValues }) => {
                dispatch(addTask(values))
                resetForm(initialValues)
            }}
        >
            {({ errors }) => (
                <Form className={style.input}>
                    <Field id="text" name="text" placeholder="Type to add todo" validate={required} />
                    <button type="submit">Add</button>
                </Form>
            )}
        </Formik>
    </div>)
}

