import { ref, onMounted, onUnmounted, Ref } from 'vue'
const useClickOutside = (elementRef: Ref<HTMLElement | null>) => {
	const isOutside = ref(false)
	const handlerFn = (e: MouseEvent) => {
		if (elementRef.value) { // get TargetRef, then judge whether be contained by Ref  --Node.contains()
			if (elementRef.value.contains(e.target as HTMLElement)) {// 不包含
				isOutside.value = false
			} else {
				isOutside.value = true
			}
		}
	}

	onMounted(() => {
		window.addEventListener('click', handlerFn)
	})

	onUnmounted(() => {
		window.removeEventListener('click', handlerFn)
	})

	return isOutside
}

export default useClickOutside