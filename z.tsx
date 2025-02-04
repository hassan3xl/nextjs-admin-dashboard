<ResponsiveContainer width="100%" height={400}>
	<LineChart data={data} margin={{top: 5, right: 20, left: 10, bottom: 5}}>
		<XAxis dataKey="name" />
		<YAxis />
		<CartesianGrid strokeDasharray="3 3" />
		<Line
			type="monotone"
			dataKey="pv"
			stroke="#8884d8"
			activeDot={{r: 8}}
		/>
		<Line type="monotone" dataKey="uv" stroke="#82ca9d" />
	</LineChart>
</ResponsiveContainer>;

const PostEdit = ({post}) => {
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm({
		resolver: zodResolver(formScema),
	});

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<FormItem>
				<FormLabel>Title</FormLabel>
				<Input
					type="text"
					{...register('title')}
					defaultValue={post.title}
				/>
				<FormMessage>{errors.title?.message}</FormMessage>
			</FormItem>
			<FormItem>
				<FormLabel>Body</FormLabel>
				<Textarea {...register('body')} defaultValue={post.body} />
				<FormMessage>{errors.body?.message}</FormMessage>
			</FormItem>
			<FormItem>
				<FormLabel>Author</FormLabel>
				<Input
					type="text"
					{...register('author')}
					defaultValue={post.author}
				/>
				<FormMessage>{errors.author?.message}</FormMessage>
			</FormItem>
			<FormItem>
				<FormLabel>Date</FormLabel>
				<Input
					type="text"
					{...register('date')}
					defaultValue={post.date}
				/>
				<FormMessage>{errors.date?.message}</FormMessage>
			</FormItem>
			<Button type="submit">Submit</Button>
		</Form>
	);
};
