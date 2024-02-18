<template>
  <view class="knowledge-tree-node">
    <view class="knowledge-item">
      <view class="knowledge-title" :class="{ node: !expandable }">
        <view class="tree-item-expand" v-if="expandable" @click="toggleExpanded">
          <image v-show="!isExpanded" class="tree-fold-icon" src="../../../assets/index/icon-fold.svg"></image>
          <image v-show="isExpanded" class="tree-expand-icon" src="../../../assets/index/icon-expand.svg"></image>
        </view>
        <view class="tree-item-choose" @click="toggleChoose">
          <image v-show="!chooseAll && !chooseAny" class="tree-choose-icon" src="../../../assets/wrong-book/choose-none.svg"></image>
          <image v-show="chooseAny" class="tree-choose-icon" src="../../../assets/wrong-book/choose-any.svg"></image>
          <image v-show="chooseAll" class="tree-choose-icon" src="../../../assets/wrong-book/choose-all.svg"></image>
        </view>
        <view class="tree-item-right">
          <view class="tree-name">{{ treeItem.name }}</view>
          <nut-progress class="node-progress" v-if="!expandable" :percentage="treeItem.score_rate == -1 ? 0 : Math.round(treeItem.score_rate * 100)" stroke-color="#4D88FF" text-color="#939393"/>
        </view>
      </view>
      <template v-if="treeItem.children">
        <view
          class="knowledge-subtree"
          v-show="isExpanded"
        >
        <template v-for="(subItem, index) in treeItem.children" :key="index">
          <TreeNode :treeItem="subItem" :treeIndex="`${treeIndex},${index}`"/>
        </template>
        </view>
      </template>
    </view>
  </view>
</template>

<script setup>
import { ref, computed, watch } from "vue"
import TreeNode from "./TreeNode.vue"
import { useCommonStore } from "../../../stores/common"

const props = defineProps({
  treeItem: {
    type: Object,
    required: true
  },
  treeIndex: {
    type: String,
  },
})

const emits = defineEmits(['toggleChoose'])

const commonStore = useCommonStore()
const { toggleChooseKnowledgeId, checkKnowledgeIdInclude } = commonStore

const isExpanded = ref(false)
const expandable = computed(() => !!props.treeItem.children?.length)
const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value
}

const getFlatChildren = (item) => {
  const result = []
  const recurse = (v) => {
    if(v.children?.length) {
      v.children.forEach((c) => {
        result.push(c)
        recurse(c)
      })
    }
  }
  recurse(item)
  return result
}
const flatChildren = computed(() => getFlatChildren(props.treeItem))
// watch(flatChildren, (val) => {
//   const choosedAll = expandable.value && checkKnowledgeIdInclude(val.map((v) => v.id))
//   if(choosedAll) {
//     toggleChooseKnowledgeId(choosedAll, [props.treeItem.id])
//   }
// })

const chooseAll = computed(() => {
  if(expandable.value) {
    const ids = flatChildren.value.map((v) => v.id)
    return checkKnowledgeIdInclude(ids)
  } else {
    return checkKnowledgeIdInclude(props.treeItem.id)
  }
})

const chooseAny = computed(() =>
  expandable.value
  && !chooseAll.value
  && flatChildren.value.map((v) => v.id).some((id) => checkKnowledgeIdInclude(id)))

const toggleChoose = () => {
  console.log('treeIndex:', props.treeIndex)
  const ids = [props.treeItem.id]
  const choosedAllChildren = flatChildren.value.map((v) => v.id).every((id) => checkKnowledgeIdInclude(id))
  const choosedItself = checkKnowledgeIdInclude(props.treeItem.id)
  let hasChoosed
  if(expandable.value) {
    hasChoosed = (choosedAllChildren || choosedItself) ? true : false
  } else {
    hasChoosed = choosedItself ? true : false
  }
  if(expandable.value) {
    const recursiveChoose = (list) => {
      if(list) {
        list.forEach((item) => {
          ids.push(item.id)
          recursiveChoose(item.children)
        })
      }
    }
    recursiveChoose(props.treeItem.children)
  }
  toggleChooseKnowledgeId(hasChoosed, ids)
}

</script>

<style lang="less">
.knowledge-tree-node {

  .knowledge-item {
    font-size: 36px;
    font-weight: 500;

    .knowledge-title {
      display: flex;
      margin-bottom: 30px;
      width: 514px;

      &.node {
        align-items: baseline;
      }

      .tree-fold-icon,
      .tree-expand-icon {
        width: 42px;
        height: 42px;
        margin-right: 16px;
      }

      .tree-choose-icon {
        width: 30px;
        height: 30px;
        margin-right: 12px;
      }

      .tree-item-right {
        display: flex;
        flex-direction: column;
        width: 100%;

        .node-progress {
          --nut-progress-base-height: 27px;
          margin-top: 10px;
        }
      }
    }

    .knowledge-subtree {
      margin-left: 57px;
    }
  }
}
</style>
