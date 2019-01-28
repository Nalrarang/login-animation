import { Form, Input, Button } from 'antd'
import { FormComponentProps } from 'antd/lib/form/Form'
import * as React from 'react'

interface IloginProps {
    test: string;
}

const FormItem = Form.Item



class LoginForm extends React.Component<IloginProps & FormComponentProps, {}> {
    public handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values)
            }
        });
    }

    public render() {
        const { getFieldDecorator } = this.props.form
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        initialValue: '',
                        rules: [{ required: true, message: 'Please input your username!' }]
                    })(
                        <Input placeholder="Username or email" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        initialValue: '',
                        rules: [{ required: true, message: 'Please input your Password!' }]
                    })(
                        <Input type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                </FormItem>
            </Form>
        )

    }

}

const WrappedLoginForm = Form.create<IloginProps>()(LoginForm)
export default WrappedLoginForm