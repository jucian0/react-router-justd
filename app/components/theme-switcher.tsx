import { IconComputer, IconMoon, IconSun, IconColorPalette } from "justd-icons"
import type { Key } from "react-aria"
import { useSubmit } from "react-router"
import { useColorScheme } from "~/modules/color-scheme/component"
import { buttonStyles, Menu } from "./ui"

export function ThemeSwitcher() {
	const colorScheme = useColorScheme()
	const submit = useSubmit()

	function handleChangeTheme(theme: Key) {
		submit({ colorScheme: theme }, { method: "post", action: "/color-scheme" })
	}

	return (
		<Menu>
			<Menu.Trigger className={buttonStyles({ intent: 'outline', size: "square-petite" })}><IconColorPalette /></Menu.Trigger>
			<Menu.Content placement="bottom" onAction={handleChangeTheme} selectedKeys={[colorScheme]} selectionMode="single">
				<Menu.Item id="light"><IconSun /> Light</Menu.Item>
				<Menu.Item id="dark"><IconMoon />Dark</Menu.Item>
				<Menu.Item id="system"><IconComputer /> System</Menu.Item>
			</Menu.Content>
		</Menu>
	)
}
