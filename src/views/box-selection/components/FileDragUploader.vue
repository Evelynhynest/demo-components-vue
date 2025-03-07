<template>
  <div class="dropzone-container">
    <div ref="dropzoneRef" class="dropzone-area">
      <div class="dz-message">
        <img src="@/assets/images/icon-upload.png" class="icon-upload" />
        <div class="upload-text">点击上传或拖拽文件到这里</div>
        <div class="upload-tip">支持文件类型：word、pdf、jpg、png等；</div>
        <div class="upload-tip">若上传图片，最多同时上传10张</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Dropzone from 'dropzone'
import type { DropzoneFile } from 'dropzone'

const dropzoneRef = ref<HTMLElement>()
let dropzone: Dropzone | null = null

onMounted(() => {
  if (!dropzoneRef.value) return

  dropzone = new Dropzone(dropzoneRef.value, {
    url: '#', // 需要自定义上传逻辑
    autoProcessQueue: false,
    acceptedFiles: '.jpeg,.jpg,.png,.pdf,.doc,.docx',
    maxFilesize: 50, // MB
    maxFiles: 10,
    parallelUploads: 3,
    addRemoveLinks: true,
    dictDefaultMessage: '',
    thumbnailWidth: 130,
    thumbnailHeight: 73,
  })

  // 文件添加事件
  dropzone.on('addedfile', (file: DropzoneFile) => {
    handleFileValidation(file)
  })

  // 上传进度更新
  dropzone.on('uploadprogress', (file: DropzoneFile, progress: number) => {
    // file.percent = progress
    console.log('upload progress =>', file, progress)
    // updateFileProgress(file)
  })

  // 成功回调
  dropzone.on('success', (file: DropzoneFile, response: any) => {
    console.log('upload success =>', file, response)
    // handleUploadSuccess(file, response)
  })

  // 错误处理
  dropzone.on('error', (file: DropzoneFile, errorMsg: string) => {
    console.log('upload error =>', file, errorMsg)
    // handleUploadError(file, errorMsg)
  })
})

// 自定义上传逻辑（整合原有七牛云上传）
const handleFileValidation = async (file: DropzoneFile) => {
  setTimeout(() => {
    dropzone?.emit('success', file, 'https://precision-science-miniprogram.oss-cn-shenzhen.aliyuncs.com/student-wrong-book/preview/1f93ebb758c17f92a683763d757adeaa.jpg')
  }, 1000)
  // try {
  //   const ext = file.name.split('.').pop()
  //   const res = await reqGetUploadToken({ ext })
    
  //   if (res.data.token) {
  //     // 使用七牛云上传
  //     const qiniuObserver = qiniu.upload(file, null, res.data.token)
  //     qiniuObserver.subscribe({
  //       next: (v) => {
  //         dropzone?.emit('uploadprogress', file, v.total.percent)
  //       },
  //       complete: (v) => {
  //         dropzone?.emit('success', file, v)
  //       },
  //       error: (err) => {
  //         dropzone?.emit('error', file, err.message)
  //       }
  //     })
  //   }
  // } catch (err) {
  //   dropzone?.emit('error', file, '获取token失败')
  // }
}

onBeforeUnmount(() => {
  dropzone?.destroy()
})

</script>

<style lang="less" scoped>
.dropzone-container {
  .dropzone-area {
    min-height: 160px;
    border: 2px dashed rgba(68, 142, 251, 0.2);
    background: #fbfcff;
    border-radius: 4px;
    
    .dz-message {
      text-align: center;
      padding: 30px 0;
    }
    
    .dz-preview {
      margin: 16px;
      .dz-image {
        border-radius: 6px;
      }
    }
  }
}
</style>