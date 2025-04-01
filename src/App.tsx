import { Flex, Text, Button, Checkbox } from "@radix-ui/themes";
const App = () => {
  return (
    <div>
      <div className="carousel carousel-center rounded-box">
  <div className="carousel-item">
    <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" alt="Pizza" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
      alt="Pizza" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
      alt="Pizza" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
      alt="Pizza" />
  </div>
  <div className="carousel-item">
    <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" alt="Pizza" />
  </div>
  <div className="carousel-item">
    <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" alt="Pizza" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
      alt="Pizza" />
  </div>
</div>
<div className="chat chat-start">
  <div className="chat-bubble">
    It's over Anakin,
    <br />
    I have the high ground.
  </div>
</div>
<div className="chat chat-end">
  <div className="chat-bubble">You underestimate my power!</div>
</div>


		<Flex direction="column" gap="2">
			<Text>Hello from Radix Themes :)</Text>
			<Button>Let's go</Button>
		</Flex>
    Link



<Flex align="center" gap="4" wrap="wrap">
	<Flex align="center" gap="3" wrap="wrap">
		<Button>Button</Button>
		<Button asChild>
			<a href="#">Link</a>
		</Button>
		<Button disabled>Disabled</Button>
	</Flex>

    </div>
  )
}

export default App
