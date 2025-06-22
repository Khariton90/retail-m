<template>
	<div class="actions">
		<ChangeQuery />
		<SetTimeRangePicker />
	</div>
</template>

<script setup lang="ts">
import { ChangeQuery } from '~/features/ChangeQuery'
import { SetTimeRangePicker } from '~/features/SetTimeRangePicker'
</script>

<style scoped>
.actions {
	display: flex;
	width: 100%;
	gap: 10px;
	justify-content: flex-end;
	padding: 20px 0;
}
</style>
