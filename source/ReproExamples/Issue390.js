import Slider from '@react-native-community/slider';
import React, { useState } from 'react';

export function Issue390() {
	const [value, setValue] = useState(0);

	return (
		<Slider
			value={value}
			step={1}
			minimumValue={0}
			maximumValue={5}
			onValueChange={setValue}
		/>
	);
};
