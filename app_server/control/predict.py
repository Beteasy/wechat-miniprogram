# coding: utf-8

from skimage import io,transform
import tensorflow as tf
import numpy as np


#path1 2 3 4 5 图片路径

cloud_dict = {0:'gaojiyun',1:'jiyuyun',2:'jiyun',3:'juanyun'}

w=100
h=100
c=3

def read_one_image(path):
    img = io.imread(path)
    img = transform.resize(img,(w,h))
    return np.asarray(img)

with tf.Session() as sess:
    data = []
    data1 = read_one_image(path1)
    data2 = read_one_image(path2)
    data3 = read_one_image(path3)
    data4 = read_one_image(path4)

    data.append(data1)
    data.append(data2)
    data.append(data3)
    data.append(data4)


    saver = tf.train.import_meta_graph('路径')
    saver.restore(sess,tf.train.latest_checkpoint('路径'))

    graph = tf.get_default_graph()
    x = graph.get_tensor_by_name("x:0")
    feed_dict = {x:data}

    logits = graph.get_tensor_by_name("logits_eval:0")

    classification_result = sess.run(logits,feed_dict)

    #打印出预测矩阵
    print(classification_result)
    #打印出预测矩阵每一行最大值的索引
    print(tf.argmax(classification_result,1).eval())
    #根据索引通过字典对应花的分类
    output = []
    output = tf.argmax(classification_result,1).eval()
    for i in range(len(output)):
        print("第",i+1,"云朵预测:"+cloud_dict[output[i]])
