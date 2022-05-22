<script>
    import "../styles/tailwind-output.css";
</script>
<nav>
    <div class="text-center">
        <a href="/" class="inline-block mt-4 mb-2 text-slate-500 text-sm">fukkuen.com</a>
    </div>
    <ul class="flex items-center justify-center text-slate-700 text-sm">
        <li><a href="/">Works</a></li>
<!--        <li><a href="/blog">Blog</a></li>-->
        <li><a href="/bio">Bio</a></li>
    </ul>
</nav>
<div class="max-w-screen-md mx-auto">
    <slot></slot>
</div>

<style>
    li {
        @apply px-4;
    }
</style>