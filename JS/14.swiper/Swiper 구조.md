![[swiper 구조.jpg]]
<img src="https://github.com/saugjong0521/Dev/blob/eddc2cb73e9f46bccdbd6159747aaf2a8fbb5261/JS/14.swiper/swiper%20%EA%B5%AC%EC%A1%B0.jpg">

slide (div)요소 안에 content가 있어야 함

만약 slide에 background요소를 줘서 구조화 시킬 경우, 원하지 않는 동작이 발생할 수 있음

즉 아래의 예시처럼 구조화를 진행ㅑ해야 안정적임,
<container>
	<wrapper>
		<slide>
			content (ex, img, div 등)
		</slide>
	</wrapper>
</container>
