<script>
    import "../styles/tailwind-output.css";
</script>
<nav>
    <div class="text-center mt-4 mb-2 text-slate-500 text-sm">fukkuen.com</div>
    <ul class="flex items-center justify-center text-slate-700 text-sm">
        <li><a href="/works">Works</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/bio">Bio</a></li>
    </ul>
</nav>
<slot></slot>

<style>
    li {
        @apply px-4;
    }
</style>