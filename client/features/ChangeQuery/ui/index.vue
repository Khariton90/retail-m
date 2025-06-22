<template>
	<URadioGroup
		color="warning"
		orientation="horizontal"
		indicator="end"
		variant="card"
		:default-value="selectedValue"
		:items="radioItems"
		v-model="$store.selectedQuery"
		@change="handleChangeQuery"
	/>
</template>

<script setup lang="ts">
import { useStore } from '~/app/store'
import { getDateFormat, getUnixTimestamp } from '~/shared'
import { radioItems } from '../model/consts'

const $store = useStore()
const selectedValue = computed(() => $store.selectedQuery)

const handleChangeQuery = () => {
	const query = getUnixTimestamp(selectedValue.value)
	$store.setQuery({ ...query }, selectedValue.value)
	navigateTo(
		`/?start=${getDateFormat(query.start)}&end=${getDateFormat(query.end)}`
	)
}
</script>
