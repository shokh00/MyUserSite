import { Button, Form, Input, Modal } from "antd";
import { Modal__Content } from "../../../style/styled-components/ui";
import { useDispatch, useSelector } from "react-redux";
import { updateState } from "../../../redux/slices";
import ReCAPTCHA from "react-google-recaptcha";

function CustomModal() {
    const { openModal } = useSelector(state => state.slices);
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const onFinish = value => {
        console.log(value);
    }

    return (
        <Modal
            width={400}
            open={openModal}
            onOk={() => dispatch(updateState({ openModal: !openModal }))}
            onCancel={() => dispatch(updateState({ openModal: !openModal }))}
            footer={null}
        >
            <Modal__Content>
                <h1>
                    Вход на сайт
                </h1>
                <Form form={form} layout='vertical' onFinish={onFinish} >
                    <Form.Item label="Номер телефона" name={"phone"} rules={[{ required: true, message: "Checking is required" }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={"checked"} rules={[{ required: true, message: "Checking is required" }]}>
                        <ReCAPTCHA
                            className='captcha'
                            sitekey="6Lev3i8oAAAAAG0m3fuM8SHiW3vTXg-CG1tqgUxj"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType='submit' type='primary' block>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal__Content>
        </Modal>
    )
};

export default CustomModal;