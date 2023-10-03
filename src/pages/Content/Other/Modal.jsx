import { Button, Form, Input, Modal, Select } from "antd";
import { Modal__Content } from "../../../style/styled-components/ui";
import { useDispatch, useSelector } from "react-redux";
import { updateState } from "../../../redux/slices";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

function CustomModal() {
    const { openModal } = useSelector(state => state.slices);
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [typeOfDelivery, setTypeOfDelivery] = useState("PICKUP")

    const onFinish = value => {
        let newValue = {
            total: "number",
            orderMode: typeOfDelivery,

            
        };

        if (newValue == "PICKUP") {
            
        }

        console.log(newValue);
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
                    <Form.Item label="Имя" name={"name"} rules={[{ required: true, message: "Checking is required" }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Номер телефона"  name={"phone"} rules={[{ required: true, message: "Checking is required" }]}>
                        <Input addonBefore="+998" />
                    </Form.Item>
                    <Select
                        
                        style={{
                            margin: "0 0 15px 0",
                            width: "100%"
                        }}
                        defaultValue="PICKUP"
                        onChange={(value) => setTypeOfDelivery(value)}
                        options={[
                            {
                                value: 'PICKUP',
                                label: 'Pick Up',
                            },
                            {
                                value: 'DELIVERY',
                                label: 'Delivery',
                            },
                        ]}
                    >

                    </Select>
                    {
                        typeOfDelivery == "PICKUP" ?
                            <Form.Item label="Время доставки" name={"pickupTime"} rules={[{ required: true, message: "Checking is required" }]}>
                                <Input />
                            </Form.Item>
                            :
                            <>
                                <Form.Item label="Город" name={"city"} rules={[{ required: true, message: "Checking is required" }]}>
                                    <Input />
                                </Form.Item>
                                <Form.Item label="Улица" name={"street"} rules={[{ required: true, message: "Checking is required" }]}>
                                    <Input />
                                </Form.Item>
                                <Form.Item label="Авенью" name={"avenue"} rules={[{ required: true, message: "Checking is required" }]}>
                                    <Input />
                                </Form.Item>
                                <Form.Item label="Номер квартиры" name={"houseNo"} rules={[{ required: true, message: "Checking is required" }]}>
                                    <Input />
                                </Form.Item>
                            </>
                    }
                    <Form.Item rules={[{ required: true, message: "Checking is required" }]}>
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
        </Modal >
    )
};

export default CustomModal;