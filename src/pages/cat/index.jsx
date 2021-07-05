import React, { Component } from 'react'
import { Button, Upload } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
export default class index extends Component {
  state={
    imageUrl: [],
    loading: false
  }

  handleChange=(e) => {
    console.log(e)
  }

  render () {
    const { imageUrl, loading } = this.state

    return (
      <div>
          <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
       // beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : ''}
      </Upload>
      </div>
    )
  }
}
