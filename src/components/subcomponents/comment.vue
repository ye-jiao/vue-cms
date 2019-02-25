<template>
    <div>
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要BB的内容(最多吐槽120字)" maxlength="120"></textarea>

        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-list">
                <div class="cmt-title">
                    第一楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2012-12-12 12:12:12
                </div>
                <div class="cmt-body"></div>
            </div>
        </div>
         <mt-button type="danger" size="large">加载更多</mt-button>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>
