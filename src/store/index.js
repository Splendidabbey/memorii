import {createStore} from 'vuex';

const store = createStore({
    state() {
      return {
        memories: [
          {
            id: 'm1',
            title: 'A trip to the mountains',
            image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
            description: 'It was a very Nice Trip'
          },
          {
            id: 'm2',
            title: 'learning app Development',
            image: 'https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg',
            description: 'using Ionic vue to develop app'
          }
        ]
      }
    },
    mutations: {
      addMemory(state, memoryData) {
        const newMemory = {
          id: new Date().toISOString(),
          title: memoryData.title,
          image: memoryData.imageUrl,
          description: memoryData.description
        }

        state.memories.unshift(newMemory)
      }
    },
    actions: {
      addMemory(context, memoryData) {
        context.commit('addMemory', memoryData)
      }
    },
    getters: {
      memories(state) {
        return state.memories 
      },
      memory(state) {
        return (memoryId) => {
          return state.memories.find((memory) => memory.id === memoryId);
        }
      }
    }
});

export default store