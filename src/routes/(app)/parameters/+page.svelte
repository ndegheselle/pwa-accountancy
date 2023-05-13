<script>
    import { confirm } from "@global/dialogs"
    import { categories } from "@lib/store";
    import { Category } from "@lib/models";
    import { colors } from "@lib/services/colors.js";
    import categoriesService from "@lib/services/categories";

    import CategoryIcon from "@components/CategoryIcon.svelte";
    import ColorInput from "@components/ColorInput.svelte";

    function handleModalFinish() {
        console.log(modalCategory);
        if (modalCategory.id)
            categoriesService.update(modalCategory);
        else
            categoriesService.create(modalCategory);
            
        modalCategory = null;
    }

    function handleRemove(_category)
    {
        confirm.show(`Are you sure you want to delete '${_category.name}' ?`, "Delete category", "is-danger").then(() => {
            categoriesService.remove(_category.id);
        });
    }

    let modalCategory = null;
</script>

<h1 class="title">Parameters</h1>

<div class="panel has-background-white">
    <div class="panel-block flex-container pb-0">
        <span class="has-text-grey-lighter">Categories</span>
        <button class="button is-small is-light" on:click={() => modalCategory = new Category()}>
            <span class="icon is-small">
                <i class="fa-solid fa-plus"></i>
            </span>
        </button>
    </div>

    {#each $categories as category}
        <a class="panel-block" on:click={() => {}}>
            <span class="panel-icon">
                <CategoryIcon categoryId={category.id} />
            </span>
            {category.name}
            {#if category.id}
            <div class="ml-auto">
                <button
                    class="button is-outlined is-small"
                    on:click={() => (modalCategory = category)}
                >
                    <span class="icon is-small">
                        <i class="fa-solid fa-pen" />
                    </span>
                </button>
                <button
                    class="button is-outlined is-small is-danger"
                    on:click={() => handleRemove(category)}
                >
                    <span class="icon is-small">
                        <i class="fa-solid fa-trash" />
                    </span>
                </button>
            </div>
            {/if}
        </a>
    {/each}
</div>

{#if modalCategory}
    <div
        class="modal"
        class:is-active={modalCategory}
        on:closing={() => {
            modalCategory = null;
        }}
    >
        <div class="modal-background" />
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">{modalCategory.id ? "Edit" : "Create"} category</p>
                <button class="delete" aria-label="close"/>
            </header>
            <section class="modal-card-body is-flex">
                <ColorInput
                        bind:color={modalCategory.color}
                        availableColors={colors}
                    />
                    <input
                        class="input  mx-1"
                        type="text"
                        bind:value={modalCategory.name}
                    />
            </section>
            <footer class="modal-card-foot is-justify-content-flex-end p-2">
                <button class="button" aria-label="close"
                        >Cancel</button
                    >
                    <button
                        class="ml-1 button is-success"
                        on:click={handleModalFinish}
                        >{modalCategory.id ? "Edit" : "Add"}</button
                    >
            </footer>
        </div>
    </div>
{/if}