import { Field, Form, Formik } from 'formik'
import { required } from '../../utils/validators';

export let ToDoAdd = (props) => {
    return (<div>
        <Formik
            initialValues={{
                text: '',
            }}
            onSubmit={(values, { resetForm, initialValues }) => {
                props.addTask(values)
                resetForm(initialValues)
            }}
        >
            {({ errors }) => (
                <Form>
                    <Field id="text" name="text" placeholder="Type to add todo" validate={required} />
                    <button type="submit">Add</button>
                </Form>
            )}
        </Formik>
    </div>)
}

