import { h } from 'vue';
import Theme from 'vitepress/theme';
import GiscusComment from './components/GiscusComment.vue';
import DotGridBackground from './components/DotGridBackground.vue';
import './css/custom.css'

export default {
    ...Theme,
    Layout() {
        return h(Theme.Layout, null, {
            'layout-top': () => h(DotGridBackground),
            'doc-after': () => h(GiscusComment),
        });
    },
};