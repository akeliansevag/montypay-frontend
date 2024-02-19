<template lang="">
    <div class="blob">
        <svg viewbox="0 0 1000 1000" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="b" r="1" cx="0" cy="0">
                    <stop offset="0.543634" stop-color="#4328F2"/>
                    <stop offset="0.398359" stop-color="#74F1C4"/>
                    <stop offset="0.84164" stop-color="#74F1C4"/>
                    <stop offset="0.994572" stop-color="#4328F2"/>
                </radialGradient>
            </defs>
            <path fill="url(#b)" transform="translate(100 100)" >
                <animate attributeName="d" dur="10s" repeatCount="indefinite" values="M910 661q-88 161-249 79.5t-294-28Q234 766 180 633t18-248q72-115 187-131.5t205 25Q680 320 839 410t71 251Z;
                M787.5 646.5q5.5 146.5-141 194T387 807q-113-81-220.5-194T211 431.5q152-68.5 220.5-143t164-27q95.5 47.5 141 143t51 242Z;
                M892 671q-50 171-221 153t-260.5-81.5Q321 679 248 589.5T262.5 425Q350 350 425 319.5t191-41Q732 268 837 384t55 287Z;
                M802 553.5Q607 607 553.5 668t-230 123q-176.5 62-93-114.5t121-232q37.5-55.5 93-103t211-100Q811 189 904 344.5t-102 209Z;
                M791 673q55 173-118 86t-312.5-33.5q-139.5 53.5-244-86t79-200q183.5-60.5 244-215T561 224q61 154 118 215t112 234Z;
                M783.5 664Q828 828 664 805t-332.5 4.5q-168.5 27.5-153-141t77-260q61.5-91.5 153-158t174 9Q665 335 702 417.5T783.5 664Z;
                M863 646q-71 146-217 116t-251-41q-105-11-105-116t-2-212q-2-107 105-153t186 28q79 74 217 153t67 225Z;
                M787 644.5q2 144.5-142.5 155t-238-51Q313 687 198 593.5t23-164Q359 359 429.5 181T658 93.5Q816 184 800.5 342T787 644.5Z;
                M910 661q-88 161-249 79.5t-294-28Q234 766 180 633t18-248q72-115 187-131.5t205 25Q680 320 839 410t71 251Z;"></animate>
            </path>
        </svg>
    </div>
</template>

<script setup>

</script>

<style scoped lang="sass">
    .blob 
        position: absolute
        top: 0
        left: 0
        width: 60%
        height: 100%
        filter: blur(70px)
        animation: move 40s infinite

    @keyframes move 
        0%
            transform: translate(0) scale(2) rotate(0deg)
        25%
            transform: translate(50%) scale(2.5) rotate(90deg)
        50%
            transform: translate(100%) scale(3) rotate(180deg)
        100%
            transform: translate(0) scale(2) rotate(0deg)
</style>